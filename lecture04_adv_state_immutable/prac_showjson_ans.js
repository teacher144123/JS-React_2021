import { useState } from 'react';
import data from './1999.json';

function App() {
    const [selectedData, setSelectedData] = useState([]);
    const showAll = () => {
        // TODO: 改寫這裡
        const newData = data;
        setSelectedData(newData);
    };
    const showGS = () => {
        // TODO: 改寫這裡
        const newData = data.filter(d => d.ZipName_ === '鼓山區');
        setSelectedData(newData);
    };
    const show100 = () => {
        // TODO: 改寫這裡
        const newData = data.slice(0, 100);
        setSelectedData(newData);
    }

    return (
        <div>
            <div>
                <button onClick={show100}>顯示前 100 筆</button>
                <button onClick={showGS}>顯示鼓山區</button>
                <button onClick={showAll}>顯示全部</button>
            </div>
            <div>There are {selectedData.length} rows.</div>
            <ul>
                {selectedData.map((c) => <li>{c.ZipName_}：{c.BeforeDesc_}</li>)}
            </ul>
        </div>   
    )
}

export default App;