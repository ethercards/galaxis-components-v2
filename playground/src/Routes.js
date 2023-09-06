import CardTest from "./Views/Card/CardTest";
import Home from "./Views/Home/Home";

const routes = [
	{
	  path: '/',
	  component: Home,
	  exact: true,
	},
	{
	  path: '/card-test',
	  component: CardTest,
	  exact: true,
	}];

export default routes;