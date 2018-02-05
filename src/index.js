import ko from 'knockout';
import './index.sass';
import Main from './main';
import Pagination from './app/pagination/pagination';

ko.applyBindings(new Pagination(), document.getElementById('paginationBind'));
ko.applyBindings(new Main(), document.getElementById('mainBind'));
