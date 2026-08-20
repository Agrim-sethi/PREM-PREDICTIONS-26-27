export interface FixtureSeed {
  id: string;
  gw: number;
  matchNo: number;
  home: string;
  away: string;
}

export const PREMIER_LEAGUE_TEAMS = [
  "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", "Chelsea",
  "Coventry", "Crystal Palace", "Everton", "Fulham", "Hull", "Ipswich",
  "Leeds", "Liverpool", "Man City", "Man Utd", "Newcastle", "Nott'm Forest",
  "Sunderland", "Spurs"
].sort();

// Source: supplied EPL 2026/27 CSV. Dates/times are intentionally ignored.
// Each gameweek is numbered 1-10 in CSV order. Home/Away are preserved exactly.
const FIXTURE_ROWS = `
1|1|Arsenal|Coventry
1|2|Hull|Man Utd
1|3|Everton|Crystal Palace
1|4|Ipswich|Sunderland
1|5|Nott'm Forest|Leeds
1|6|Brentford|Spurs
1|7|Brighton|Aston Villa
1|8|Man City|Bournemouth
1|9|Newcastle|Liverpool
1|10|Fulham|Chelsea
2|1|Bournemouth|Everton
2|2|Aston Villa|Arsenal
2|3|Chelsea|Brighton
2|4|Coventry|Hull
2|5|Crystal Palace|Man City
2|6|Leeds|Brentford
2|7|Liverpool|Nott'm Forest
2|8|Man Utd|Ipswich
2|9|Sunderland|Fulham
2|10|Spurs|Newcastle
3|1|Arsenal|Chelsea
3|2|Brentford|Sunderland
3|3|Brighton|Leeds
3|4|Everton|Man Utd
3|5|Fulham|Crystal Palace
3|6|Hull|Aston Villa
3|7|Ipswich|Liverpool
3|8|Man City|Coventry
3|9|Newcastle|Bournemouth
3|10|Nott'm Forest|Spurs
4|1|Bournemouth|Brentford
4|2|Aston Villa|Nott'm Forest
4|3|Chelsea|Hull
4|4|Coventry|Brighton
4|5|Crystal Palace|Ipswich
4|6|Leeds|Newcastle
4|7|Liverpool|Fulham
4|8|Man Utd|Man City
4|9|Sunderland|Arsenal
4|10|Spurs|Everton
5|1|Bournemouth|Liverpool
5|2|Brentford|Chelsea
5|3|Brighton|Arsenal
5|4|Everton|Ipswich
5|5|Fulham|Man Utd
5|6|Leeds|Crystal Palace
5|7|Man City|Sunderland
5|8|Newcastle|Hull
5|9|Nott'm Forest|Coventry
5|10|Spurs|Aston Villa
6|1|Arsenal|Leeds
6|2|Aston Villa|Brentford
6|3|Chelsea|Bournemouth
6|4|Coventry|Newcastle
6|5|Crystal Palace|Nott'm Forest
6|6|Hull|Everton
6|7|Ipswich|Fulham
6|8|Liverpool|Man City
6|9|Man Utd|Spurs
6|10|Sunderland|Brighton
7|1|Bournemouth|Sunderland
7|2|Brentford|Liverpool
7|3|Brighton|Crystal Palace
7|4|Everton|Chelsea
7|5|Fulham|Hull
7|6|Leeds|Man Utd
7|7|Man City|Ipswich
7|8|Newcastle|Aston Villa
7|9|Nott'm Forest|Arsenal
7|10|Spurs|Coventry
8|1|Arsenal|Everton
8|2|Aston Villa|Man City
8|3|Chelsea|Spurs
8|4|Coventry|Fulham
8|5|Crystal Palace|Newcastle
8|6|Hull|Brentford
8|7|Ipswich|Nott'm Forest
8|8|Liverpool|Brighton
8|9|Man Utd|Bournemouth
8|10|Sunderland|Leeds
9|1|Bournemouth|Leeds
9|2|Aston Villa|Fulham
9|3|Brentford|Nott'm Forest
9|4|Chelsea|Man Utd
9|5|Coventry|Sunderland
9|6|Hull|Ipswich
9|7|Liverpool|Arsenal
9|8|Man City|Brighton
9|9|Newcastle|Everton
9|10|Spurs|Crystal Palace
10|1|Arsenal|Hull
10|2|Brighton|Brentford
10|3|Crystal Palace|Liverpool
10|4|Everton|Coventry
10|5|Fulham|Newcastle
10|6|Ipswich|Bournemouth
10|7|Leeds|Spurs
10|8|Man Utd|Aston Villa
10|9|Nott'm Forest|Man City
10|10|Sunderland|Chelsea
11|1|Bournemouth|Nott'm Forest
11|2|Aston Villa|Sunderland
11|3|Brentford|Everton
11|4|Chelsea|Leeds
11|5|Coventry|Crystal Palace
11|6|Hull|Brighton
11|7|Liverpool|Man Utd
11|8|Man City|Fulham
11|9|Newcastle|Arsenal
11|10|Spurs|Ipswich
12|1|Arsenal|Man City
12|2|Brighton|Newcastle
12|3|Crystal Palace|Hull
12|4|Everton|Liverpool
12|5|Fulham|Bournemouth
12|6|Ipswich|Aston Villa
12|7|Leeds|Coventry
12|8|Man Utd|Brentford
12|9|Nott'm Forest|Chelsea
12|10|Sunderland|Spurs
13|1|Bournemouth|Brighton
13|2|Aston Villa|Everton
13|3|Brentford|Arsenal
13|4|Chelsea|Crystal Palace
13|5|Coventry|Ipswich
13|6|Hull|Nott'm Forest
13|7|Liverpool|Sunderland
13|8|Man City|Leeds
13|9|Newcastle|Man Utd
13|10|Spurs|Fulham
14|1|Bournemouth|Hull
14|2|Aston Villa|Crystal Palace
14|3|Brentford|Man City
14|4|Chelsea|Liverpool
14|5|Everton|Fulham
14|6|Leeds|Ipswich
14|7|Man Utd|Coventry
14|8|Newcastle|Sunderland
14|9|Nott'm Forest|Brighton
14|10|Spurs|Arsenal
15|1|Arsenal|Bournemouth
15|2|Brighton|Everton
15|3|Coventry|Aston Villa
15|4|Crystal Palace|Man Utd
15|5|Fulham|Brentford
15|6|Hull|Spurs
15|7|Ipswich|Newcastle
15|8|Liverpool|Leeds
15|9|Man City|Chelsea
15|10|Sunderland|Nott'm Forest
16|1|Bournemouth|Coventry
16|2|Arsenal|Man Utd
16|3|Brentford|Newcastle
16|4|Brighton|Ipswich
16|5|Chelsea|Aston Villa
16|6|Leeds|Fulham
16|7|Liverpool|Spurs
16|8|Man City|Hull
16|9|Nott'm Forest|Everton
16|10|Sunderland|Crystal Palace
17|1|Aston Villa|Leeds
17|2|Coventry|Chelsea
17|3|Crystal Palace|Arsenal
17|4|Everton|Sunderland
17|5|Fulham|Brighton
17|6|Hull|Liverpool
17|7|Ipswich|Brentford
17|8|Man Utd|Nott'm Forest
17|9|Newcastle|Man City
17|10|Spurs|Bournemouth
18|1|Aston Villa|Liverpool
18|2|Coventry|Brentford
18|3|Crystal Palace|Bournemouth
18|4|Everton|Man City
18|5|Fulham|Arsenal
18|6|Hull|Leeds
18|7|Ipswich|Chelsea
18|8|Man Utd|Sunderland
18|9|Newcastle|Nott'm Forest
18|10|Spurs|Brighton
19|1|Bournemouth|Aston Villa
19|2|Arsenal|Ipswich
19|3|Brentford|Crystal Palace
19|4|Brighton|Man Utd
19|5|Chelsea|Newcastle
19|6|Leeds|Everton
19|7|Liverpool|Coventry
19|8|Man City|Spurs
19|9|Nott'm Forest|Fulham
19|10|Sunderland|Hull
20|1|Arsenal|Brentford
20|2|Brighton|Bournemouth
20|3|Crystal Palace|Chelsea
20|4|Everton|Aston Villa
20|5|Fulham|Spurs
20|6|Ipswich|Coventry
20|7|Leeds|Man City
20|8|Man Utd|Newcastle
20|9|Nott'm Forest|Hull
20|10|Sunderland|Liverpool
21|1|Bournemouth|Ipswich
21|2|Aston Villa|Man Utd
21|3|Brentford|Brighton
21|4|Chelsea|Sunderland
21|5|Coventry|Everton
21|6|Hull|Arsenal
21|7|Liverpool|Crystal Palace
21|8|Man City|Nott'm Forest
21|9|Newcastle|Fulham
21|10|Spurs|Leeds
22|1|Arsenal|Newcastle
22|2|Brighton|Man City
22|3|Crystal Palace|Spurs
22|4|Everton|Brentford
22|5|Fulham|Aston Villa
22|6|Ipswich|Hull
22|7|Leeds|Chelsea
22|8|Man Utd|Liverpool
22|9|Nott'm Forest|Bournemouth
22|10|Sunderland|Coventry
23|1|Bournemouth|Fulham
23|2|Aston Villa|Ipswich
23|3|Brentford|Man Utd
23|4|Chelsea|Nott'm Forest
23|5|Coventry|Leeds
23|6|Hull|Crystal Palace
23|7|Liverpool|Everton
23|8|Man City|Arsenal
23|9|Newcastle|Brighton
23|10|Spurs|Sunderland
24|1|Arsenal|Liverpool
24|2|Brighton|Hull
24|3|Crystal Palace|Coventry
24|4|Everton|Newcastle
24|5|Fulham|Man City
24|6|Ipswich|Spurs
24|7|Leeds|Bournemouth
24|8|Man Utd|Chelsea
24|9|Nott'm Forest|Brentford
24|10|Sunderland|Aston Villa
25|1|Aston Villa|Bournemouth
25|2|Coventry|Liverpool
25|3|Crystal Palace|Brentford
25|4|Everton|Leeds
25|5|Fulham|Nott'm Forest
25|6|Hull|Sunderland
25|7|Ipswich|Arsenal
25|8|Man Utd|Brighton
25|9|Newcastle|Chelsea
25|10|Spurs|Man City
26|1|Bournemouth|Crystal Palace
26|2|Arsenal|Fulham
26|3|Brentford|Coventry
26|4|Brighton|Spurs
26|5|Chelsea|Ipswich
26|6|Leeds|Aston Villa
26|7|Liverpool|Hull
26|8|Man City|Newcastle
26|9|Nott'm Forest|Man Utd
26|10|Sunderland|Everton
27|1|Aston Villa|Chelsea
27|2|Coventry|Bournemouth
27|3|Crystal Palace|Sunderland
27|4|Everton|Nott'm Forest
27|5|Fulham|Leeds
27|6|Hull|Man City
27|7|Ipswich|Brighton
27|8|Man Utd|Arsenal
27|9|Newcastle|Brentford
27|10|Spurs|Liverpool
28|1|Bournemouth|Spurs
28|2|Arsenal|Crystal Palace
28|3|Brentford|Ipswich
28|4|Brighton|Fulham
28|5|Chelsea|Coventry
28|6|Leeds|Hull
28|7|Liverpool|Aston Villa
28|8|Man City|Everton
28|9|Nott'm Forest|Newcastle
28|10|Sunderland|Man Utd
29|1|Bournemouth|Newcastle
29|2|Aston Villa|Hull
29|3|Chelsea|Arsenal
29|4|Coventry|Man City
29|5|Crystal Palace|Fulham
29|6|Leeds|Brighton
29|7|Liverpool|Ipswich
29|8|Man Utd|Everton
29|9|Sunderland|Brentford
29|10|Spurs|Nott'm Forest
30|1|Arsenal|Sunderland
30|2|Brentford|Bournemouth
30|3|Brighton|Coventry
30|4|Everton|Spurs
30|5|Fulham|Liverpool
30|6|Hull|Chelsea
30|7|Ipswich|Crystal Palace
30|8|Man City|Man Utd
30|9|Newcastle|Leeds
30|10|Nott'm Forest|Aston Villa
31|1|Bournemouth|Man City
31|2|Aston Villa|Brighton
31|3|Chelsea|Fulham
31|4|Coventry|Arsenal
31|5|Crystal Palace|Everton
31|6|Leeds|Nott'm Forest
31|7|Liverpool|Newcastle
31|8|Man Utd|Hull
31|9|Sunderland|Ipswich
31|10|Spurs|Brentford
32|1|Arsenal|Aston Villa
32|2|Brentford|Leeds
32|3|Brighton|Chelsea
32|4|Everton|Bournemouth
32|5|Fulham|Sunderland
32|6|Hull|Coventry
32|7|Ipswich|Man Utd
32|8|Man City|Crystal Palace
32|9|Newcastle|Spurs
32|10|Nott'm Forest|Liverpool
33|1|Bournemouth|Arsenal
33|2|Aston Villa|Coventry
33|3|Brentford|Fulham
33|4|Chelsea|Man City
33|5|Everton|Brighton
33|6|Leeds|Liverpool
33|7|Man Utd|Crystal Palace
33|8|Newcastle|Ipswich
33|9|Nott'm Forest|Sunderland
33|10|Spurs|Hull
34|1|Arsenal|Spurs
34|2|Brighton|Nott'm Forest
34|3|Coventry|Man Utd
34|4|Crystal Palace|Aston Villa
34|5|Fulham|Everton
34|6|Hull|Bournemouth
34|7|Ipswich|Leeds
34|8|Liverpool|Chelsea
34|9|Man City|Brentford
34|10|Sunderland|Newcastle
35|1|Bournemouth|Man Utd
35|2|Brentford|Aston Villa
35|3|Brighton|Sunderland
35|4|Everton|Hull
35|5|Fulham|Ipswich
35|6|Leeds|Arsenal
35|7|Man City|Liverpool
35|8|Newcastle|Coventry
35|9|Nott'm Forest|Crystal Palace
35|10|Spurs|Chelsea
36|1|Arsenal|Nott'm Forest
36|2|Aston Villa|Newcastle
36|3|Chelsea|Everton
36|4|Coventry|Spurs
36|5|Crystal Palace|Brighton
36|6|Hull|Fulham
36|7|Ipswich|Man City
36|8|Liverpool|Brentford
36|9|Man Utd|Leeds
36|10|Sunderland|Bournemouth
37|1|Bournemouth|Chelsea
37|2|Brentford|Hull
37|3|Brighton|Liverpool
37|4|Everton|Arsenal
37|5|Fulham|Coventry
37|6|Leeds|Sunderland
37|7|Man City|Aston Villa
37|8|Newcastle|Crystal Palace
37|9|Nott'm Forest|Ipswich
37|10|Spurs|Man Utd
38|1|Arsenal|Brighton
38|2|Aston Villa|Spurs
38|3|Chelsea|Brentford
38|4|Coventry|Nott'm Forest
38|5|Crystal Palace|Leeds
38|6|Hull|Newcastle
38|7|Ipswich|Everton
38|8|Liverpool|Bournemouth
38|9|Man Utd|Fulham
38|10|Sunderland|Man City
`.trim();

export const FIXTURES: FixtureSeed[] = FIXTURE_ROWS.split('\n').map(row => {
  const [gw, matchNo, home, away] = row.split('|');
  const g = Number(gw);
  const m = Number(matchNo);
  return { id: `gw${g}_m${m}`, gw: g, matchNo: m, home, away };
});
