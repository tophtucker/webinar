const response = await fetch(
  "https://api.github.com/repos/observablehq/framework/issues",
  {headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
    accept: "application/vnd.github.v3+json"
  }}
);
process.stdout.write(JSON.stringify(await response.json()));
