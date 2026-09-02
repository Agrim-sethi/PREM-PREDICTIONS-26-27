const FULL_SEASON_PX = 3000;

/**
 * The race chart uses a 700px SVG viewBox. With a full season of 380 matches,
 * several match positions collapse into the same physical mouse pixel, making
 * hover selection skip matches. Give the chart a wide scrollable canvas so
 * every match gets its own usable hover zone while keeping the same SVG logic.
 */
export function prepareRaceChartHover(): void {
  const stage = document.getElementById('race-chart-stage') as HTMLElement | null;
  const svg = document.getElementById('race-chart-svg') as SVGSVGElement | null;
  if (!stage || !svg) return;

  stage.style.width = '100%';
  stage.style.maxWidth = '100%';
  stage.style.overflowX = 'auto';
  stage.style.overflowY = 'hidden';
  stage.style.webkitOverflowScrolling = 'touch';

  svg.style.width = `${FULL_SEASON_PX}px`;
  svg.style.maxWidth = 'none';
  svg.style.height = '280px';
  svg.style.display = 'block';
  svg.style.flex = '0 0 auto';
}
