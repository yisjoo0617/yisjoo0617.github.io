'use client';

import mermaid from 'mermaid';
import { useEffect, useMemo, useState } from 'react';

interface MermaidProps {
  chart: string;
}

let isInitialized = false;

const initializeMermaid = () => {
  if (isInitialized) {
    return;
  }

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
  });

  isInitialized = true;
};

export const Mermaid = ({ chart }: MermaidProps) => {
  const [svg, setSvg] = useState<string>('');
  const [hasError, setHasError] = useState(false);
  const id = useMemo(() => `mermaid-${Math.random().toString(36).slice(2, 10)}`, []);

  useEffect(() => {
    let isMounted = true;

    const render = async () => {
      try {
        initializeMermaid();
        const { svg } = await mermaid.render(id, chart);

        if (!isMounted) return;

        setSvg(svg);
        setHasError(false);
      } catch {
        if (!isMounted) return;
        setHasError(true);
      }
    };

    void render();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (!svg || hasError) {
    return (
      <pre>
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div className='not-prose my-6 overflow-x-auto rounded-md border p-4'>
      <div aria-label='Mermaid diagram' dangerouslySetInnerHTML={{ __html: svg }} role='img' />
    </div>
  );
};
