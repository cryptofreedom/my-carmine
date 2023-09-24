import {constants, ProviderOptions} from "starknet";

const devnetOptions = {
    sequencer:{
        baseUrl:"http://localhost:5050/",
        feederGatewayUrl:"feeder_gateway",
        gatewayUrl:"http://localhost:5050/",
        chainId:constants.StarknetChainId.SN_MAIN,
    }
}


