import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AppInfo } from './search/AppInfo';
import { Apps } from './search/Apps';
import { Home } from './search/Home';
import { Providers } from './search/Providers';

type SearchProps = RouteComponentProps<{
  query?: string;
}>

export const Search = ({ match }: SearchProps) => {
  return (
    <Switch>
      <Route path={`${match.path}/:provider/apps/:appId`} component={AppInfo} />
      <Route path={`${match.path}/:provider/apps`} component={Apps} />
      <Route path={`${match.path}/:provider`} component={Providers} />
      <Route path={`${match.path}`} component={Home} />
    </Switch>
  )
}