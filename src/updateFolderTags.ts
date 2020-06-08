const FOLDER_TAG_FOLDER_NAMES = ['Foo'];

export default function updateTimeBasedTags(): void {
  FOLDER_TAG_FOLDER_NAMES.forEach((name) => {
    // TODO: Also remove tag from other tasks. Doing `tag.tasks.forEach(t =>
    // t.removeTag(tag))` is too slow, so we should build a diff between sets.
    // `Set` should work, because equality works.
    folderNamed(name).apply((folderOrProject) => {
      if (folderOrProject instanceof Project) {
        folderOrProject.task.apply((task) => {
          task.addTag(tagNamed(`📁 ${name}`));
        });
      }
    });
  });
}
