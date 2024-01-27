import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

import useScreenSize from "../../hooks/useScreenSize";

const CustomChartLegend = ({ payload }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-evenly"}
      m={"5px 40px"}
      alignItems={"center"}
    >
      {payload.map((entry, index) => (
        <Box
          display={"flex"}
          flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
          gap={"5px"}
          key={entry.dataKey}
          alignItems={{
            base: "normal",
            sm: "normal",
            md: "center",
            lg: "center",
          }}
        >
          <Box
            backgroundColor={entry.color}
            padding={"5px 8px"}
            borderRadius={"20px"}
            width={"1px"}
            height={"1px"}
          ></Box>
          <Text color={"gray"} fontSize={"13px"}>
            {entry.dataKey}:
          </Text>
          <Text
            as={"span"}
            color={"#000"}
            fontWeight={"bold"}
            pl={"5px"}
            fontSize={"13px"}
          >
            {entry.payload["data-value"]}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export const StackedBarChart = ({ chartData, labelInfo }) => {
  // change chart scale on basis of device width => to avoid congestions of bars if bars are more
  const changeChartDataScale = (data) => {
    const result = data.filter((elem, i) => {
      return i % 2 == 0;
    });

    return result;
  };

  const screenSize = useScreenSize();

  const {
    xAxisLabel,
    yAxisLabel,
    firstStackedBarInfo,
    secondStackedBarInfo,
    thirdStackedBarInfo,
  } = labelInfo;

  return (
    <ResponsiveContainer width={"99%"} height={275}>
      <BarChart
        width={800}
        height={270}
        data={
          screenSize.width <= 450 && chartData.length > 12
            ? changeChartDataScale(chartData)
            : chartData
        }
      >
        <Legend verticalAlign="top" content={CustomChartLegend} />
        <CartesianGrid
          vertical={false}
          strokeDasharray={"4 4"}
          strokeWidth={1.4}
        />
        <Tooltip />

        <XAxis dataKey={xAxisLabel} interval={1} />
        <YAxis dataKey={yAxisLabel} />
        <Bar
          dataKey={firstStackedBarInfo.dataKey}
          stackId={"a"}
          fill="#0800a3"
          barSize={20}
          data-value={firstStackedBarInfo.legendLabel}
        />
        <Bar
          dataKey={secondStackedBarInfo.dataKey}
          stackId={"a"}
          fill="#4935ff"
          data-value={secondStackedBarInfo.legendLabel}
        />
        <Bar
          dataKey={thirdStackedBarInfo.dataKey}
          stackId={"a"}
          fill="#85afff"
          data-value={thirdStackedBarInfo.legendLabel}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
