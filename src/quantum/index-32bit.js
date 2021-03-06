import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import DashboardPage from '../components/DashboardPage';
import Perfherder from './perfherder';
import Countdown from './countdown';
import TelemetryContainer from '../telemetry/graph';
import { quantum32QueryParams, flowGraphProps, statusLabels } from './constants';
import GraphContainer from '../components/graph-container';
import { CONFIG } from './config';
import wrapSectionComponentsWithErrorBoundaries from '../utils/componentEnhancers';
import PerfherderGraphContainer from '../containers/PerfherderGraphContainer';

export default class QuantumIndex32 extends React.Component {
  constructor(props) {
    super(props);
    document.body.classList.add('multipage');
  }

  render() {
    const { full } = parse(this.props.location.search);

    const sections = wrapSectionComponentsWithErrorBoundaries([
      {
        cssRowExtraClasses: 'generic-metrics-graphics',
        rows: [[
          <GraphContainer
            query={flowGraphProps.query}
            customClass={flowGraphProps.customClass}
            title={flowGraphProps.title}
            legend={flowGraphProps.legend}
            target={flowGraphProps.target}
            api={flowGraphProps.api}
            keys={flowGraphProps.keys}
            width={flowGraphProps.width}
            height={flowGraphProps.height}
            link='/quantum/32/bugs'
          />,
          <Countdown />]],
      },
      {
        title: 'Benchmarks',
        rows: [
          [
            CONFIG.windows32Regression[0].map(config => (
              <Perfherder
                {...config}
                key={config.title}
              />
            )),
            CONFIG.windows32Regression[1].map(config => (
              <Perfherder
                {...config}
                key={config.title}
              />
            )),
          ],
          [
            <PerfherderGraphContainer
              title='Speedometer'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    frameworkId: 10,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'raptor-speedometer-firefox',
                  },
                },
                {
                  label: 'Chrome',
                  seriesConfig: {
                    frameworkId: 10,
                    platform: 'windows7-32-nightly',
                    option: 'opt',
                    project: 'mozilla-central',
                    suite: 'raptor-speedometer-chrome',
                  },
                },
              ]}
            />,
          ],
        ],
      },
      {
        title: 'Performance Tests',
        rows: [
          [
            null,
            <PerfherderGraphContainer
              title='Page load (tp5)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tp5o',
                  },
                },
              ]}
            />,
          ],
          [
            <PerfherderGraphContainer
              title='Window Opening (tpaint e10s)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tpaint',
                  },
                },
              ]}
            />,
            <PerfherderGraphContainer
              title='Start-up (sessionrestore)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'sessionrestore',
                  },
                },
              ]}
            />,
          ],
          [
            <PerfherderGraphContainer
              title='Start-up (sessionrestore_no_auto_restore)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'sessionrestore_no_auto_restore',
                  },
                },
              ]}
            />,
            <PerfherderGraphContainer
              title='Start-Up (ts_paint)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'ts_paint',
                  },
                },
              ]}
            />,
          ],
          [
            <PerfherderGraphContainer
              title='Tab Opening (tabpaint)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tabpaint',
                  },
                },
              ]}
            />,
            <PerfherderGraphContainer
              title='Tab Animation (TART)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tart',
                  },
                },
              ]}
            />,
          ],
          [
            <PerfherderGraphContainer
              title='Tab Switch (tps)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tps',
                  },
                },
              ]}
            />,
            <PerfherderGraphContainer
              title='SVG (tsvg_static)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tsvg_static',
                  },
                },
              ]}
            />,
          ],
          [
            <PerfherderGraphContainer
              title='SVG (tsvgr_opacity)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tsvgr_opacity',
                  },
                },
              ]}
            />,
            <PerfherderGraphContainer
              title='SVG (tsvgx)'
              series={[
                {
                  label: 'Firefox',
                  seriesConfig: {
                    extraOptions: ['e10s', 'stylo'],
                    frameworkId: 1,
                    platform: 'windows7-32',
                    option: 'pgo',
                    project: 'mozilla-central',
                    suite: 'tsvgx',
                  },
                },
              ]}
            />,
          ],
        ],
      },
      {
        cssRowExtraClasses: 'generic-metrics-graphics photon-perf',
        title: 'Performance Metrics',
        rows: [
          [
            <TelemetryContainer
              key='winOpen'
              id='winOpen'
              title='Window open'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='tabSwitch'
              id='tabSwitch'
              title='Tab switch'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='tabClose'
              id='tabClose'
              title='Tab close'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='firstPaint'
              id='firstPaint'
              title='First paint'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='sessionRestoreWindow'
              id='sessionRestoreWindow'
              title='Session Restore Window ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='sessionRestoreStartupInit'
              id='sessionRestoreStartupInit'
              title='Session Restore Startup Init ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='sessionRestoreStartupOnload'
              id='sessionRestoreStartupOnload'
              title='Session Restore Startup Onload ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='tabSwitchUpdate'
              id='tabSwitchUpdate'
              title='Tab Switch Update ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='gcAnimation'
              id='gcAnimation'
              title='GC Animation ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='gpuProcessInit'
              id='gpuProcessInit'
              title='GPU Process Initialization ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='gpuProcessLaunch'
              id='gpuProcessLaunch'
              title='GPU Process Launch ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='inputEventCoalesced'
              id='inputEventCoalesced'
              title='Input Event Response Coalesced ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='networkCacheHit'
              id='networkCacheHit'
              title='Network Cache Hit ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='networkCacheMiss'
              id='networkCacheMiss'
              title='Network Cache Miss ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='placesAutocomplete'
              id='placesAutocomplete'
              title='Places Autocomplete 6  First Results ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='searchServiceInit'
              id='searchServiceInit'
              title='Search Service Init ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='timeToDomComplete'
              id='timeToDomComplete'
              title='Time to DOM Complete ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='timeToDomInteractive'
              id='timeToDomInteractive'
              title='Time to DOM Interactive ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='timeToDomLoading'
              id='timeToDomLoading'
              title='Time to DOM Loading ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='timeToFirstInteraction'
              id='timeToFirstInteraction'
              title='Time to First Interaction ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='timeToNonBlankPaint'
              id='timeToNonBlankPaint'
              title='Time to Non Blank Paint ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='timeToResponseStart'
              id='timeToResponseStart'
              title='Time to Response Start ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='webextBackgroundPageLoad'
              id='webextBackgroundPageLoad'
              title='Webext Background Page Load ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='webextContentScriptInjection'
              id='webextContentScriptInjection'
              title='Webext Content Script Injection ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='webextExtensionStartup'
              id='webextExtensionStartup'
              title='Webext Extension Startup ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='timeToLoadEventEnd'
              id='timeToLoadEventEnd'
              title='Time to Load Event End ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='timeToDomContentLoadedEnd'
              id='timeToDomContentLoadedEnd'
              title='Time to DOM Content Loaded End ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='contentPaintTime'
              id='contentPaintTime'
              title='Content Paint Time ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='pageLoad'
              id='pageLoad'
              title='FX Page Load ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='simpleSessionRestored'
              id='simpleSessionRestored'
              title='Simple Measures Session Restored ms'
              queryParams={quantum32QueryParams}
            />,
          ],
          [
            <TelemetryContainer
              key='scalarFirstPaint'
              id='scalarFirstPaint'
              title='Scalars Timestamp - First Paint ms'
              queryParams={quantum32QueryParams}
            />,
            <TelemetryContainer
              key='timeToFirstScroll'
              id='timeToFirstScroll'
              title='Time to First Scroll ms'
              queryParams={quantum32QueryParams}
            />,
          ],
        ],
      },
    ]);

    let rowIdx = 0;
    const $content = sections.reduce((reduced, { title, rows, cssRowExtraClasses }, sectionId) => {
      const add = [];
      const statusList = new Map(Array.from(statusLabels.keys()).map(key => [key, 0]));
      for (const widgets of rows) {
        for (const widget of widgets) {
          const secondary = widget.type.displayName === 'PerfherderWidget';
          if (!secondary) {
            statusList.set(widget.props.status, statusList.get(widget.props.status) + 1);
          } else if (widget.props.status === 'red') {
            statusList.set('secondary', statusList.get('secondary') + 1);
          }
        }
        let className = 'row';
        // Add 2nd class if indicated
        className += (cssRowExtraClasses) ? ` ${cssRowExtraClasses}` : '';
        rowIdx += 1;
        if (!full || sectionId < 2) {
          add.push(<div className={className} key={`row-${rowIdx}`}>
            {widgets}
          </div>);
        }
      }
      const $status = [];
      for (const [status, count] of statusList) {
        if (statusLabels.has(status) && count) {
          $status.push(<div key={`status-${status}`} className={`header-status header-status-${status}`}>
            <em>{count}</em>
            {' '}
            {statusLabels.get(status)}
          </div>);
        }
      }
      if ((!full || sectionId < 2) && title) {
        add.unshift(<h2 className='section-header' key={sectionId}>
          <span>
            {title}
          </span>
          {$status}
        </h2>);
      }
      return reduced.concat(add);
    }, []);

    if (full) {
      $content.push(<h2 key='moreData'>
More data on
        <strong>https://health.graphics/quantum</strong>
. Ask questions in
        <strong>#quantum</strong>
        {' '}
(IRC & Slack)
      </h2>);
    }

    document.body.classList[full ? 'add' : 'remove']('summary-fullscreen');

    const $dashboard = (
      <DashboardPage
        title='Quantum'
        subtitle='Release Criteria Report'
      >
        {$content}
      </DashboardPage>
    );

    return $dashboard;
  }
}

QuantumIndex32.propTypes = {
  location: PropTypes.object,
};
