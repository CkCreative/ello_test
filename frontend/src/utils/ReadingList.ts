const READING_LIST_KEY = "readingList";

type Book = {
  title: string;
  readingLevel: string;
  coverPhotoURL: string;
  author: string;
  priority: number | undefined;
};

export const getReadingList = (): Book[] => {
  const list = localStorage.getItem(READING_LIST_KEY);
  return list
    ? JSON.parse(list).sort((a: any, b: any) => b.priority - a.priority)
    : [];
};

export const addToReadingList = (book: Book) => {
  const list = getReadingList();
  list.push({ ...book, priority: Date.now() });
  localStorage.setItem(READING_LIST_KEY, JSON.stringify(list));
};

export const removeFromReadingList = (title: string) => {
  const list = getReadingList().filter((book: Book) => book.title !== title);
  localStorage.setItem(READING_LIST_KEY, JSON.stringify(list));
};
