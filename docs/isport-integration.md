# iSport integration handoff

The public marketing site never scrapes or frames an `isportsystem.cz` tenant. The `ScheduleProvider` boundary keeps the UI stable while the official API contract is being obtained.

Ask iSport technical support for:

- read-only public schedule API documentation and test credentials;
- tenant/studio identifier and the documented authentication method;
- lesson ID, title, start time, cancelled state, instructor, capacity, free places, waitlist state, and reservation deep link;
- supported date filters, pagination, timezone, rate limits, and cache guidance;
- permission to display this data on the Lina Studio public website.

Server variables are listed in `.env.example`. `ISPORT_API_AUTHORIZATION` is the complete documented `Authorization` header value and must never be exposed to the browser. Development fixtures are enabled by default. Production shows no fabricated lessons when API access is absent or the provider fails.

The current adapter accepts a JSON array or an object with a `classes`/`data` array and common field aliases. Align the validation schema to the exact official payload once iSport supplies its documentation.
