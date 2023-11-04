import React from "react";
import { Flex, Heading, Paragraph, Strong, useCurrentTheme } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI, useTest, useTest2 } from "../hooks/useEntitiesAPI";
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";
import { HostTable } from "../components/HostTable";


export const Home = () => {
  const hostList = useEntitiesAPI()

  console.log(hostList)

  return (
    <Flex flexDirection="column" alignItems="center" padding={32} color="orange">
      Result

      <HostTable data={hostList} />
    </Flex>
  );
};
