import { browserHistory } from 'react-router';

export function Homepage() {
  return '/';
}


export function goBack() {
  browserHistory.goBack();
}

