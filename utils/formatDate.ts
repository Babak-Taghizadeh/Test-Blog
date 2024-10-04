export const formatDate = (initialDate: string) => {
    const date = new Date(initialDate);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };