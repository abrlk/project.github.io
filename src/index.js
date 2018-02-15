import ko from 'knockout';
import './index.sass';
import Main from './main';
import Pagination from './app/pagination/pagination';
import LiveSearch from './app/liveSearch/liveSearch';
import UsersDB from './app/database/database';
import Confirm from './app/confirm/confirm';

const db = new UsersDB();
ko.applyBindings(new Confirm(), document.getElementById('confirmBind'));
ko.applyBindings(new LiveSearch(), document.getElementById('liveSearchBind'));
ko.applyBindings(new Pagination(), document.getElementById('paginationBind'));
ko.applyBindings(new Main(), document.getElementById('mainBind'));
