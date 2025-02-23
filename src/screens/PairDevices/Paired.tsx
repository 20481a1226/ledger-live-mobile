import React, { useCallback } from "react";
import { Trans } from "react-i18next";
import { getDeviceModel } from "@ledgerhq/devices";
import { Device } from "@ledgerhq/live-common/lib/hw/actions/types";

import { Button, Flex, IconBox, Text } from "@ledgerhq/native-ui";
import { CheckAloneMedium } from "@ledgerhq/native-ui/assets/icons";
import { TrackScreen } from "../../analytics";

type Props = {
  device: Device;
  onContinue: (device: Device) => void;
  genuine: boolean;
};

export default function Paired({ device, onContinue: onContinueProps }: Props) {
  const onContinue = useCallback(() => {
    onContinueProps(device);
  }, [onContinueProps, device]);

  return (
    <Flex flexDirection={"column"} flex={1} justifyContent={"center"} drt={6}>
      <TrackScreen category="PairDevices" name="Paired" />
      <Flex alignItems={"center"}>
        <IconBox
          Icon={CheckAloneMedium}
          iconSize={24}
          boxSize={64}
          color={"success.c100"}
        />
      </Flex>
      <Text variant={"h2"} textAlign={"center"} mb={5} mt={7}>
        <Trans
          i18nKey="PairDevices.Paired.title"
          values={getDeviceModel("nanoX")}
        />
      </Text>
      <Text
        variant={"bodyLineHeight"}
        fontWeight={"medium"}
        textAlign={"center"}
        color={"neutral.c80"}
        mb={8}
      >
        <Trans
          i18nKey="PairDevices.Paired.desc"
          values={getDeviceModel("nanoX")}
        />
      </Text>
      <Button
        event="PairDevicesContinue"
        type="main"
        onPress={onContinue}
        width={"100%"}
      >
        <Trans i18nKey="PairDevices.Paired.action" />
      </Button>
    </Flex>
  );
}
