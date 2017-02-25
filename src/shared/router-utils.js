import {Route, IndexRoute} from 'inferno-router';
import createElement from 'inferno-create-element';

const handleIndexRoute  = (indexRouteNode) => createElement(IndexRoute, indexRouteNode);
const handleChildRoute  = (childRouteNode) => [handleRouteNode(childRouteNode)];
const handleChildRoutes = (childRouteNodes) => childRouteNodes.map(handleChildRoute);

function handleRouteNode(routeConfigNode) {

	if (routeConfigNode.indexRoute && !routeConfigNode.childRoutes) {
		return createElement(Route, routeConfigNode);
	}

	// create deep copy of config
	const node = Object.assign({}, routeConfigNode);
	node.children = [];

	// handle index route config
	if (node.indexRoute) {
		node.children.push(handleIndexRoute(node.indexRoute));
		delete node.indexRoute;
	}

	// handle child routes config
	if (node.childRoutes) {
		const nodes = Array.isArray(node.childRoutes) ? node.childRoutes : [node.childRoutes];
		node.children.push(...handleChildRoutes(nodes));
		delete node.childRoutes;
	}

	return createElement(Route, node);
}

export default (routeConfig) => routeConfig.map(handleRouteNode);