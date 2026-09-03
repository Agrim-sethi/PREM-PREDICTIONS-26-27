const MIN_CHART_PX = 700;
const PX_PER_MATCH = 36;

/**
 * The race chart uses a 700px SVG viewBox. Once enough matches are plotted,
 * multiple match positions collapse into the same physical pixels and the
 * hover index can skip entries, especially near the chart edges. Make the
 * SVG width proportional to the number of plotted matches so every match
 * gets a stable horizontal hover zone.
 */
export function prepareRaceChartHover(): void {
  const stage = document.getElementById('race-chart-stage') as HTMLElement | null;
  const svg = document.getElementById('race-chart-svg') as SVGSVGElement | null;
  if (!stage || !svg) return;

  const firstLine = svg.querySelector('.race-line') as SVGPolylineElement | null;
  const pointCount = firstLine?.getAttribute('points')
    ?.trim()
    .split(/\s+/)
    .filter(Boolean).length ?? 0;
  const chartWidth = Math.max(MIN_CHART_PX, pointCount * PX_PER_MATCH);

  stage.style.width = '100%';
  stage.style.maxWidth = '100%';
  stage.style.overflowX = 'auto';
  stage.style.overflowY = 'hidden';
  (stage.style as any).webkitOverflowScrolling = 'touch';

  svg.style.width = `${chartWidth}px`;
  svg.style.maxWidth = 'none';
  svg.style.height = '280px';
  svg.style.display = 'block';
  svg.style.flex = '0 0 auto';
}
