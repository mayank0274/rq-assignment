import React, { useState } from "react";
import {
  Box,
  Select,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Divider,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { StackedBarChart } from "../utlis/StackedBarChart";

const Stat = ({ value, title, font_size }) => {
  return (
    <Box borderBottom={"2px solid #7b6dfe"} paddingBottom={"10px"}>
      <Text
        textTransform={"capitalize"}
        fontSize={{
          base: font_size ? font_size : "25px",
          sm: font_size ? font_size : "25px",
          md: "25px",
          lg: "25px",
        }}
        fontWeight={"bold"}
      >
        {value}
      </Text>
      <Text textTransform={"capitalize"} color={"gray"} fontSize={"14px"}>
        {title}
      </Text>
    </Box>
  );
};

const SelectBox = ({ title, options }) => {
  return (
    <Box display={"flex"} width={"100%"} alignItems={"center"}>
      <Text fontWeight={500} fontSize={"15px"} width={"max-content"}>
        {title}:
      </Text>
      <Select size={"sm"} border={"none"} width={"max-content"}>
        {options.map((elem) => {
          return (
            <option value={elem.value} key={elem.value}>
              {elem.title}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};

const CircularProgressChart = ({ value, title }) => {
  return (
    <Box>
      <Box
        width={"75px"}
        height={"75px"}
        borderRadius={"50%"}
        sx={{
          background: `radial-gradient(closest-side,white 79%, transparent 80% 100%),conic-gradient(#28d5ab ${value}%, #edebe9 0)`,
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {value}
          <sup
            style={{
              fontWeight: 500,
            }}
          >
            %
          </sup>
        </Text>
      </Box>

      <Text
        color={"gray"}
        fontSize={"14px"}
        my={"4px"}
        textAlign={"center"}
        fontWeight={500}
      >
        {title}
      </Text>
    </Box>
  );
};

export const DataAnalytics = () => {
  const chartData = [
    { name: 20, Employer: 0, Employee: 20, Total_Interest: 15 },
    { name: 22.5, Employer: 10, Employee: 30, Total_Interest: 30 },
    { name: 25, Employer: 20, Employee: 40, Total_Interest: 45 },
    { name: 27.5, Employer: 30, Employee: 50, Total_Interest: 60 },
    { name: 30, Employer: 40, Employee: 60, Total_Interest: 75 },
    { name: 32.5, Employer: 50, Employee: 70, Total_Interest: 90 },
    { name: 35, Employer: 60, Employee: 80, Total_Interest: 105 },
    { name: 37.5, Employer: 70, Employee: 90, Total_Interest: 120 },
    { name: 40, Employer: 80, Employee: 100, Total_Interest: 135 },
    { name: 42.5, Employer: 90, Employee: 110, Total_Interest: 150 },
    { name: 45, Employer: 100, Employee: 120, Total_Interest: 165 },
    { name: 47.5, Employer: 110, Employee: 130, Total_Interest: 180 },
    { name: 50, Employer: 120, Employee: 140, Total_Interest: 195 },
  ];

  const charLabelInfo = {
    xAxisLabel: "name",
    yAxisLabel: "",
    firstStackedBarInfo: {
      dataKey: "Employer",
      legendLabel: "K 73,500",
    },
    secondStackedBarInfo: {
      dataKey: "Employee",
      legendLabel: "K 52,500",
    },
    thirdStackedBarInfo: {
      dataKey: "Total_Interest",
      legendLabel: "K 244,313",
    },
  };

  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);

  // value can be changed here according to BACKEND api's
  const ageOptions = [
    {
      title: "Under 30",
      value: "Under 30",
    },
    {
      title: "Under 40",
      value: "Under 40",
    },
    {
      title: "Under 50",
      value: "Under 50",
    },
  ];

  const salaryOptions = [
    {
      title: "K 20 - K 30",
      value: "K 20 - K 30",
    },
    {
      title: "K 40 - K 50",
      value: "K 40 - K 50",
    },
    {
      title: "K 50 - K 60",
      value: "K 50 - K 60",
    },
  ];

  const genderOptions = [
    {
      title: "Male",
      value: "male",
    },
    {
      title: "Female",
      value: "female",
    },
  ];

  return (
    <Box
      display={"flex"}
      flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
      w={"100%"}
      data-section="analytics-main-container"
      p={{ base: "5px", sm: "5px", md: "30px", lg: "30px" }}
      mb={"50px"}
      h={{
        base: "max-content",
        sm: "max-content",
        md: "100vh",
        lg: "max-content",
      }}
      overflowY="auto"
    >
      <Box
        as="section"
        w={{ base: "100%", sm: "100%", md: "100%", lg: "65%" }}
        display={"flex"}
        flexDir={"column"}
        gap={"20px"}
        alignItems={"center"}
        data-section="analytics-chart-container"
      >
        <Box width={"90%"} data-section="analytics-head">
          <Text textTransform={"capitalize"} color={"#7b6dfe"} fontWeight={500}>
            Retirement income
          </Text>
          <Text
            textTransform={"capitalize"}
            fontSize={"25px"}
            fontWeight={"bold"}
          >
            starting year 2056
          </Text>
        </Box>

        <Box
          w={"90%"}
          display={"flex"}
          flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
          gap={"40px"}
          data-section="stats"
          flexWrap={"wrap"}
        >
          <Box>
            <Stat title={"my goal"} value={"$300,000"} font_size={"38px"} />
          </Box>
          <Box
            width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
            display={"flex"}
            gap={"30px"}
            justifyContent={{
              base: "space-between",
              sm: "space-between",
              md: "normal",
              lg: "normal",
            }}
          >
            <Stat title={"goal achieved"} value={"80%"} />
            <Stat title={"est. monthly income"} value={"$300"} />
          </Box>
        </Box>

        <Box
          w={"90%"}
          my={"10px"}
          display={"flex"}
          flexDir={"column"}
          gap={"10px"}
          data-section="bar-chart-container"
        >
          <Text textTransform={"capitalize"} fontSize={"17px"} fontWeight={500}>
            contributions overtime
          </Text>

          <StackedBarChart chartData={chartData} labelInfo={charLabelInfo} />
        </Box>

        <Box
          width={"90%"}
          display={"flex"}
          flexDir={"column"}
          gap={"10px"}
          data-section="extra-option-section"
          alignItems={{
            base: "normal",
            sm: "normal",
            md: "center",
            lg: "normal",
          }}
        >
          <Text fontSize={"17px"} fontWeight={500}>
            How do I compare to my peers ?
          </Text>

          <Text
            textTransform={"capitalize"}
            color={"gray"}
            fontWeight={500}
            fontSize={"13px"}
          >
            These number represent current goal achievement
          </Text>

          <Box
            display={"flex"}
            width={"100%"}
            flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
            gap={"15px"}
            data-section="extra-options-container"
            alignItems={{
              base: "normal",
              sm: "normal",
              md: "center",
              lg: "normal",
            }}
          >
            <Box
              width={{ base: "100%", sm: "100%", md: "60%", lg: "40%" }}
              data-container="dropdown-container"
            >
              <SelectBox title={"Age"} options={ageOptions} key={"age"} />
              <SelectBox
                title={"Salary"}
                options={salaryOptions}
                key={"Salary"}
              />
              <SelectBox
                title={"Gender"}
                options={genderOptions}
                key={"gender"}
              />
            </Box>

            <Box
              width={{ base: "99%", sm: "99%", md: "60%", lg: "60%" }}
              display={"flex"}
              gap={"20px"}
              data-section="circular-progrss-container"
              justifyContent={{
                base: "space-between",
                sm: "space-between",
                md: "normal",
                lg: "normal",
              }}
            >
              <CircularProgressChart
                title={"Average"}
                value={75}
                key={"average"}
              />
              <CircularProgressChart title={"Top"} value={95} key={"top"} />
              <CircularProgressChart title={"Me"} value={59} key={"me"} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        as="section"
        w={{ base: "100%", sm: "100%", md: "100%", lg: "35%" }}
        h={"max-content"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={"20px"}
        padding={"10px"}
        data-section="retirement-strategy-calculation-container"
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "90%", lg: "90%" }}
          display={"flex"}
          flexDir={"column"}
          alignItems={{
            base: "normal",
            sm: "normal",
            md: "center",
            lg: "center",
          }}
          gap={"20px"}
          backgroundColor="#fafafa"
          padding={"20px"}
          data-section="calculation-container"
        >
          <Text fontSize={"17px"} fontWeight={500}>
            Retirement Strategy
          </Text>

          <Box
            w={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
            data-section="calculation-slider-container"
          >
            <Box display={"flex"} flexDir={"column"} gap={"10px"}>
              <Text
                fontSize={"14px"}
                fontWeight={500}
                color={"grey"}
                textTransform={"capitalize"}
              >
                Employee contribution
              </Text>
              <Box display={"flex"} gap={"10px"}>
                <Slider
                  defaultValue={employeeContribution}
                  onChange={(val) => setEmployeeContribution(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>

                <Text>{employeeContribution}%</Text>
              </Box>
            </Box>

            <Box display={"flex"} flexDir={"column"} gap={"10px"} my={"20px"}>
              <Text
                fontSize={"14px"}
                fontWeight={500}
                color={"grey"}
                textTransform={"capitalize"}
              >
                Retirement age
              </Text>
              <Box display={"flex"} gap={"10px"}>
                <Slider
                  defaultValue={retirementAge}
                  onChange={(val) => setRetirementAge(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>

                <Text>{retirementAge}</Text>
              </Box>
            </Box>

            <Divider />
          </Box>

          <Box
            display={"flex"}
            flexDir={"column"}
            gap={"13px"}
            w={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
            data-section="calculation-result-container"
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text fontSize={"14px"} fontWeight={500}>
                Employer Contribution
              </Text>
              <Text>8.4%</Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"}>
              <Text fontSize={"14px"} fontWeight={500}>
                Interest Rate
              </Text>
              <Text>5%</Text>
            </Box>

            <Button
              backgroundColor="#3e2ede"
              color="#fff"
              width={"100%"}
              fontSize={"14px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"3px"}
              sx={{
                _hover: {
                  backgroundColor: "#3e2ede",
                },
              }}
              borderRadius={{
                base: "1px 0 5px 5px",
                sm: "1px 0 5px 5px",
                md: "12px",
                lg: "12px",
              }}
              position={{
                base: "absolute",
                sm: "absolute",
                md: "static",
                lg: "static",
              }}
              bottom={0}
              left={0}
              zIndex={1000}
              padding={{ base: "25px", sm: "25px", md: "0", lg: "0" }}
            >
              Update
            </Button>

            <Link
              to="#"
              style={{
                color: "#3e2ede",
                alignSelf: "center",
                justifyItems: "center",
                fontSize: "14px",
              }}
            >
              View help docs{" "}
              <FaChevronRight
                style={{
                  display: "inline",
                }}
                size={10}
              />
            </Link>
          </Box>
        </Box>

        <Box
          width={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          borderLeft={"2.5px solid #3e2ede"}
          paddingLeft={"15px"}
          alignSelf={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
            lg: "center",
          }}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Text
            fontSize={{ base: "20px", sm: "20px", md: "14px", lg: "14px" }}
            fontWeight={500}
            color={"grey"}
          >
            Are you considering a{" "}
            <Text
              as={"span"}
              fontWeight={"bold"}
              color={"#000"}
              display={"block"}
            >
              Housing Advance ?
            </Text>
            <Text
              as={"span"}
              textTransform={"capitalize"}
              color={"grey"}
              fontWeight={500}
              fontSize={"10px"}
            >
              Limited time reduced interest
            </Text>
          </Text>

          <Link
            to="#"
            style={{
              color: "#3e2ede",
              justifyItems: "center",
              fontSize: "12px",
            }}
          >
            Learn more
            <FaChevronRight
              style={{
                display: "inline",
              }}
              size={8}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
