export default function updateStalledTag(): void {
  const stalledTag = tagNamed('⏳ Stalled');
  stalledTag.tasks.forEach((t) => t.removeTag(stalledTag));
  const stalledOutcome = (task: Task): boolean =>
    // It's a library task...
    !!task.containingProject &&
    // ...it's a current concern...
    ![Task.Status.Completed, Task.Status.Dropped, Task.Status.Blocked].includes(
      task.taskStatus,
    ) &&
    // ...with children...
    task.hasChildren &&
    // ...all of which are complete or dropped
    task.children.every((t) =>
      [Task.Status.Completed, Task.Status.Dropped].includes(t.taskStatus),
    );

  // Guard for old versions of OF until I'm on Mojave / OF 3.5.x everywhere.
  if (typeof flattenedTasks !== 'undefined') {
    flattenedTasks.filter(stalledOutcome).forEach((t) => {
      t.addTag(stalledTag);
    });
  }
}
