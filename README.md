# bees
bees, I keep them

A simple node ws layer to mock service calls that are then consumed by an ember front-end
```sh
npm install
DEBUG=beekeeper:* ./bin/www
```

Then go to http://localhost:3000

notes to self:
when changing code in openshift, run this to keep the githup repo in sync
```
git push all
```

if somebody else updates the bees github repo, run this
```
git pull backup master
```
