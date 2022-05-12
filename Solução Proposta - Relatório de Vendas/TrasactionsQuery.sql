-- Query title: Transactions per Medium
SELECT
  trafficSource.medium,
  SUM(totals.transactions) total_transactions,
  SUM(totals.transactionRevenue/1000000) total_revenue,
FROM
  `bigquery-public-data.google_analytics_sample.ga_sessions_20161231`
GROUP BY trafficSource.medium