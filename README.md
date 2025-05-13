# Betting dashboard app

## Setup
Please install pnpm if not installed yet:

https://pnpm.io/installation#using-other-package-managers

After cloning the repo:
```
pnpm install
pnpm run dev
```
Application is available on http://localhost:5173/ by default

## Disclaimer (motivation of some decisions)
I decided to use React Query for both handling requests and state management and not use zustand/redux or similar dedicated library.
When choosing React Query, I based my choice on the following points:

1) Use tools as they will be used in a real solution. I could store data in zustand and access it inside query to get/change it, but its not how it done in real application
2) Regarding scalalbility and perspective, we will definitely need to have convenient logic for processing backend calls
3) At the same time, it is unknown at the moment whether the bets data will be reused in the future, which means it is not a fact that this data needs to be shared through the store
4) Although zustand is lightweight, it still loads the bundle, and adding it in advance is also not good

Also, for extensibility and flexibility, it would be possible to add a separate layout component, but since I don’t have other pages to define repeating elements (header, etc.) and the approximate structure of each page that could be taken out into a separate component, I skipped this step.
