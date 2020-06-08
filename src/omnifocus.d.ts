// NOTE: These are all properties of the Database type, an instance of which is
// the global object in OmniFocus's API. It's not clear yet whether there's a
// way to declare these as part of a class and declare the global type to be of
// that class's type.

function cleanUp(): void;

namespace PlugIn {
  class Action {
    constructor(perform: (selection: unknown) => void);
  }
}

class Alert {
  constructor(title: string, message: string);
  show(): void;
}

interface Console {
  debug(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  log(message?: any, ...optionalParams: any[]): void;
  trace(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
}

const console: Console;

class URL {
  static fromString(string: string): URL;
  fetch(success: (data: Data) => void, failure?: (error: Error) => void);
}

class Data {
  toString(): string;
}

class Tag {
  active: boolean;
  tasks: Task[];
}

function tagNamed(name: string): Tag;

class Task {
  addTag(tag: Tag): void;
  removeTag(tag: Tag): void;
  apply(f: (child: Task) => void): void;
  containingProject: Project | null;
  taskStatus: Task.Status;
  hasChildren: boolean;
  children: Task[];
}

namespace Task {
  enum Status {
    Available,
    Blocked,
    Completed,
    Dropped,
    DueSoon,
    Next,
    Overdue,
  }
}

const flattenedTasks: Task[];

function folderNamed(name: string): Folder;

class Folder {
  apply(f: (child: Folder | Project) => void): void;
}

class Project {
  task: Task;
}
