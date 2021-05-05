export const lineStyle = (start, end, lable, headSize = 0) => {
  return {
    start: start,
    end: end,
    color: "#0c0c18",
    headSize: headSize,
    label: { end: "endLabel" },
    strokeWidth: 3,
    label: lable ? {
      middle: (
        <div
          style={{ fontWeight: "400", color: "#0c0c18", marginBottom: "1.4vw", fontSize: "1vw" }}
        >
          AND
        </div>
      ),
    } : null,
    path: "smooth",

  }
}

export const lineStyleWitharrow = (start, end, lable, headSize = 0) => {
  return {
    start: start,
    end: end,
    color: "#0c0c18",
    headSize: headSize,
    label: { end: "endLabel" },
    strokeWidth: 3,
    startAnchor:["bottom"],
    endAnchor:['top'],
    label: lable ? {
      middle: (
        <div
          style={{ fontWeight: "400", color: "#0c0c18", marginBottom: "1.4vw", fontSize: "1vw" }}
        >
          AND
        </div>
      ),
    } : null,


  }
}