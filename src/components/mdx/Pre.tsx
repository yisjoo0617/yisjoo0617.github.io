import { ReactElement, ReactNode, isValidElement } from 'react';
import { Mermaid } from './Mermaid';

type PreProps = JSX.IntrinsicElements['pre'];

const flattenText = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (!node) return '';
  if (Array.isArray(node)) return node.map(flattenText).join('');
  if (isValidElement(node)) return flattenText((node as ReactElement<{ children?: ReactNode }>).props.children);
  return '';
};

export const Pre = ({ children, ...props }: PreProps) => {
  if (isValidElement(children)) {
    const codeNode = children as ReactElement<{
      children?: ReactNode;
      className?: string;
      ['data-language']?: string;
    }>;

    const language = `${codeNode.props.className || ''} ${codeNode.props['data-language'] || ''}`;
    const isMermaid = language.includes('mermaid');

    if (isMermaid) {
      const chart = flattenText(codeNode.props.children).trim();
      return <Mermaid chart={chart} />;
    }
  }

  return <pre {...props}>{children}</pre>;
};
