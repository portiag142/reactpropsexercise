import Bonus from "../bonus/Bonus";

// 1a and 3b and 3d
function Exercise({good="Great", bad="Not Great"}){
    // 2a
    return (
        <div> 
            {/* 3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            {/* 6c */}
            <Bonus/>
        </div>
    );
}

// 1b
export default Exercise;