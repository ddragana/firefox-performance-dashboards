import h3 from './h3';
import awfy from './awfy';
import awsy from './awsy';

let config = {};
if (process.env.DASHBOARD === 'awfy') {
  config = { ...awfy };
} else if (process.env.DASHBOARD === 'awsy') {
  config = { ...awsy };
} else if (process.env.DASHBOARD === 'h3') {
  config = { ...h3 };
}

const {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
} = config;

export {
  queryInfo, CONFIG, TIMERANGE_UPPER_LIMIT, BENCHMARKS,
};
