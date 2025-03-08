import {jsxs as $5c752$jsxs, jsx as $5c752$jsx} from "react/jsx-runtime";
import "react";
import $5c752$reactdomclient from "react-dom/client";




function $30ff9bf495d1ccca$var$Counter() {
    let [count, setCount] = useState(0);
    function incrementnumber() {
        count = count + 1;
        setCount(count);
    //console.log("count value is: " , count);
    }
    function decrementnumber() {
        count = count - 1;
        setCount(count);
    //console.log("count value is: " , count);
    //document.quertselector('h1').innerText = 'Count is ${count}';
    }
    return /*#__PURE__*/ (0, $5c752$jsxs)("div", {
        className: "first",
        children: [
            /*#__PURE__*/ (0, $5c752$jsxs)("h1", {
                children: [
                    "Count is: ",
                    count
                ]
            }),
            /*#__PURE__*/ (0, $5c752$jsxs)("button", {
                onClick: incrementnumber,
                children: [
                    "Increment ",
                    count
                ]
            }),
            /*#__PURE__*/ (0, $5c752$jsxs)("button", {
                onClick: decrementnumber,
                children: [
                    "Decrement ",
                    count
                ]
            })
        ]
    });
}
(0, $5c752$reactdomclient).createRoot(document.getElementById('root')).render(/*#__PURE__*/ (0, $5c752$jsx)($30ff9bf495d1ccca$var$Counter, {}));


//# sourceMappingURL=script.js.map
