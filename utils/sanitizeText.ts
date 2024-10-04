import DOMPurify from "dompurify";

export const sanitizeSliceExcerpt = (text: string) => {
    const sanitized = DOMPurify.sanitize(text);
    return sanitized.slice(0, -9);
  };

export const sanitizeContent = (text: string) => {
    const sanitized = DOMPurify.sanitize(text);
    return sanitized;
  };