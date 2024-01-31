// Results.js

import Loading from "./Loading";

const Results = ({ countryData, Loading }) => {
    const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
    return (
        <div className="results-container">
            <div>
                {2 < 4 ? <p>正しい</p> : <p>間違い</p>}
                <p>日付: <span>{date.slice(0, 10)}</span></p>
                <p>新規感染者: <span>{newConfirmed.toLocaleString()}</span></p>
                <p>感染者総数: <span>{totalConfirmed.toLocaleString()}</span></p>
                <p>新規回復者: <span>{newRecovered.toLocaleString()}</span></p>
                <p>回復者総数: <span>{totalRecovered.toLocaleString()}</span></p>
            </div>
        </div>
    );
};

export default Results;