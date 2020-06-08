/*{
    "type": "action",
    "targets": ["omnifocus"],
    "author": "Petra Jaros",
    "identifier": "com.peeja.followFocus",
    "version": "0.0",
    "description": "Follow Focus",
    "label": "Follow Focus",
    "shortLabel": "Follow Focus"
}*/

import updateFolderTags from './updateFolderTags';
import updateStalledTag from './updateStalledTag';
import updateTimeBasedTags from './updateTimeBasedTags';

export default new PlugIn.Action(() => {
  Promise.all([
    updateFolderTags(),
    updateStalledTag(),
    updateTimeBasedTags(),
  ]).then(cleanUp);
});
