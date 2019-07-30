# DAO Browser

A central repository to get info about the growing DAO ecosystem. The idea is to track new organizations, types of governance that develop and get data on how successful they end up being. Also serve as a place where people can learn about relevant standards, tooling, funding opportunities, etc about this emerging awesome field.

The project was initially born out of me trying to do data analysis for a few of the bigger DAOs and TCR projects and finding it annoyingly hard to find their Mainnet contract addresses.

## Get The Data

For now the site is a react app without a backend. The data is stored in a simple [daos.js](https://github.com/mauerv/dao-browser/blob/master/src/data/daos.js) file. Feel free to use it however you need it. In the next 2-3 weeks I'll build an actual backend for the site but the data will continue to be freely available.

## Add Your DAO

For now the easiest way to add your DAO is to make a pull request updating the [daos.js](https://github.com/mauerv/dao-browser/blob/master/src/data/daos.js) file with the relevant info. At the end of the file you can see a commented structure of what data I'm expecting, or see some of the other DAOs as an example. You can also check [this doc](https://app.graphitedocs.com/shared/docs/maurovelazquez.id.blockstack&id=1564135151143) for the data schema.

## Follow Progress

I'm using Trello to manage tasks, altough I'm open to alternatives, including something where the community can create tasks, vote tasks, etc. The board is public if you want to follow the [project's progress](https://trello.com/b/lliWWbQ3/dao-browser).

## Any suggestions?

If you want something changed, data added, a new DAO indexed, a meta idea on how to run/build the site, but you don't want or can't do it, just create an issue and I or someone else can get on building it asap.

## Credit

Some of the data was gathered thanks to the efforts of [Eric Arsenault](https://twitter.com/eric_rsno) to track the [Aragon](https://aragon.org/) and [DAOStack](https://daostack.io/) ecosystems:

* [Aragon Board](https://miro.com/app/board/o9J_kxXpuF4=/)
* [DAOStack Board](https://miro.com/app/board/o9J_kxpeJuY=/)

## License

Copyright (c) 2019 Mauro Velazquez. All rights reserved.

This work is licensed under the terms of the MIT license.
For a copy, see https://opensource.org/licenses/MIT.
