import IcalExpander = require('ical-expander');

const CALENDAR_URL = '…';

const TIME_BASED_TAG_NAMES = ['☎️ Phone Call', '🧶 Weekend'];

/**
 * Fetches the given URL and returns a Promise of the resulting Data. Note that
 * this is *not* the standard DOM `fetch()` interface. */
const fetch = (url: string): Promise<Data> =>
  new Promise((resolve, reject) => {
    URL.fromString(url).fetch(resolve, reject);
  });

export default (): Promise<void> =>
  fetch(CALENDAR_URL).then((r) => {
    const now = new Date();
    const ics = r.toString();
    const icalExpander = new IcalExpander({ ics });
    const happeningNow = icalExpander.between(now, now);

    const eventNames = [
      ...happeningNow.events,
      ...happeningNow.occurrences.map((o: any) => o.item),
    ].map((o: any) => o.summary);

    TIME_BASED_TAG_NAMES.forEach((name) => {
      tagNamed(name).active = eventNames.includes(name);
    });
  });
