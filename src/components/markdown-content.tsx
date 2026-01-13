import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        // 헤더 스타일링
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mt-8 mb-4 text-[var(--foreground)] border-b border-[var(--border)] pb-2">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold mt-6 mb-3 text-[var(--foreground)]">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold mt-5 mb-2 text-[var(--foreground)]">
            {children}
          </h3>
        ),

        // 단락 스타일링
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed text-[var(--foreground)]">
            {children}
          </p>
        ),

        // 코드 블록
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <code className="block bg-[var(--muted)] p-4 rounded-lg overflow-x-auto text-sm border border-[var(--border)]">
              {children}
            </code>
          ) : (
            <code className="bg-[var(--muted)] px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          );
        },

        // 인라인 코드
        inlineCode: ({ children }) => (
          <code className="bg-[var(--muted)] px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        ),

        // 리스트
        ul: ({ children }) => (
          <ul className="mb-4 ml-6 list-disc text-[var(--foreground)]">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 ml-6 list-decimal text-[var(--foreground)]">
            {children}
          </ol>
        ),

        // 인용구
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[var(--primary)] pl-4 py-2 my-4 bg-[var(--muted)] rounded-r-lg italic text-[var(--foreground)]">
            {children}
          </blockquote>
        ),

        // 링크
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-[var(--primary)] hover:text-[var(--secondary)] underline decoration-2 underline-offset-2 transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),

        // 테이블
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-[var(--border)] rounded-lg overflow-hidden">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="bg-[var(--muted)] px-4 py-2 text-left font-semibold border border-[var(--border)]">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2 border border-[var(--border)]">
            {children}
          </td>
        ),

        // 수평선
        hr: () => <hr className="my-8 border-[var(--border)]" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
