import React from 'react';
import leagueData from '../data/leagueData';

const LeagueTable = () => {
  return (
    <section className="league-preview" id="league">
      <div className="section-header">
        <div className="section-subtitle">Current Standings</div>
        <h2 className="section-title">Academic Year 2026/27</h2>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Fund Name</th>
              <th>University</th>
              <th>YTD Return</th>
              <th>Sharpe Ratio</th>
              <th>AUM</th>
            </tr>
          </thead>
          <tbody>
            {leagueData.map((fund) => (
              <tr key={fund.rank}>
                <td className="rank">{fund.rank}</td>
                <td className="fund-name">{fund.fundName}</td>
                <td>{fund.university}</td>
                <td className="return-positive">{fund.ytdReturn}</td>
                <td>{fund.sharpeRatio}</td>
                <td>{fund.aum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LeagueTable;