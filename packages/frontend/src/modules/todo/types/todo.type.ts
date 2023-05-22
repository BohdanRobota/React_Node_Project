export interface ITodo {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
  isPrivate: boolean;
}

export interface ITodoCeateDto {
  title: string;
  description: string;
  isPrivate: boolean;
  isComplete: boolean;
}

export interface ITodoUpdateDto {
  title?: string;
  description?: string;
  isPrivate?: boolean;
  isComplete?: boolean;
}
