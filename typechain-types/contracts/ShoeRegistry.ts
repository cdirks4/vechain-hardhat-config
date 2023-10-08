/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ShoeRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getPriceTrend"
      | "listShoe"
      | "listings"
      | "nextTrackingNumber"
      | "priceTrends"
      | "purchaseShoe"
      | "registerShoe"
      | "shoes"
      | "updateListingPrice"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ShoeListed" | "ShoePurchased" | "ShoeRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getPriceTrend",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listShoe",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextTrackingNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceTrends",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseShoe",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerShoe",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "shoes", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "updateListingPrice",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPriceTrend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listShoe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextTrackingNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceTrends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseShoe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerShoe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shoes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateListingPrice",
    data: BytesLike
  ): Result;
}

export namespace ShoeListedEvent {
  export type InputTuple = [trackingNumber: BigNumberish, price: BigNumberish];
  export type OutputTuple = [trackingNumber: bigint, price: bigint];
  export interface OutputObject {
    trackingNumber: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ShoePurchasedEvent {
  export type InputTuple = [trackingNumber: BigNumberish, price: BigNumberish];
  export type OutputTuple = [trackingNumber: bigint, price: bigint];
  export interface OutputObject {
    trackingNumber: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ShoeRegisteredEvent {
  export type InputTuple = [
    trackingNumber: BigNumberish,
    modelGroup: BigNumberish,
    size: BigNumberish,
    creator: AddressLike
  ];
  export type OutputTuple = [
    trackingNumber: bigint,
    modelGroup: bigint,
    size: bigint,
    creator: string
  ];
  export interface OutputObject {
    trackingNumber: bigint;
    modelGroup: bigint;
    size: bigint;
    creator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ShoeRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): ShoeRegistry;
  waitForDeployment(): Promise<this>;

  interface: ShoeRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getPriceTrend: TypedContractMethod<
    [modelGroup: BigNumberish],
    [bigint],
    "view"
  >;

  listShoe: TypedContractMethod<
    [trackingNumber: BigNumberish, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  listings: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [[bigint, bigint] & { trackingNumber: bigint; price: bigint }],
    "view"
  >;

  nextTrackingNumber: TypedContractMethod<[], [bigint], "view">;

  priceTrends: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  purchaseShoe: TypedContractMethod<
    [trackingNumber: BigNumberish],
    [void],
    "payable"
  >;

  registerShoe: TypedContractMethod<
    [modelGroup: BigNumberish, size: BigNumberish],
    [void],
    "nonpayable"
  >;

  shoes: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, string, string] & {
        modelGroup: bigint;
        size: bigint;
        trackingNumber: bigint;
        creator: string;
        currentOwner: string;
      }
    ],
    "view"
  >;

  updateListingPrice: TypedContractMethod<
    [trackingNumber: BigNumberish, newPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getPriceTrend"
  ): TypedContractMethod<[modelGroup: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "listShoe"
  ): TypedContractMethod<
    [trackingNumber: BigNumberish, price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "listings"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [[bigint, bigint] & { trackingNumber: bigint; price: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "nextTrackingNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceTrends"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "purchaseShoe"
  ): TypedContractMethod<[trackingNumber: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "registerShoe"
  ): TypedContractMethod<
    [modelGroup: BigNumberish, size: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "shoes"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, string, string] & {
        modelGroup: bigint;
        size: bigint;
        trackingNumber: bigint;
        creator: string;
        currentOwner: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "updateListingPrice"
  ): TypedContractMethod<
    [trackingNumber: BigNumberish, newPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ShoeListed"
  ): TypedContractEvent<
    ShoeListedEvent.InputTuple,
    ShoeListedEvent.OutputTuple,
    ShoeListedEvent.OutputObject
  >;
  getEvent(
    key: "ShoePurchased"
  ): TypedContractEvent<
    ShoePurchasedEvent.InputTuple,
    ShoePurchasedEvent.OutputTuple,
    ShoePurchasedEvent.OutputObject
  >;
  getEvent(
    key: "ShoeRegistered"
  ): TypedContractEvent<
    ShoeRegisteredEvent.InputTuple,
    ShoeRegisteredEvent.OutputTuple,
    ShoeRegisteredEvent.OutputObject
  >;

  filters: {
    "ShoeListed(uint256,uint256)": TypedContractEvent<
      ShoeListedEvent.InputTuple,
      ShoeListedEvent.OutputTuple,
      ShoeListedEvent.OutputObject
    >;
    ShoeListed: TypedContractEvent<
      ShoeListedEvent.InputTuple,
      ShoeListedEvent.OutputTuple,
      ShoeListedEvent.OutputObject
    >;

    "ShoePurchased(uint256,uint256)": TypedContractEvent<
      ShoePurchasedEvent.InputTuple,
      ShoePurchasedEvent.OutputTuple,
      ShoePurchasedEvent.OutputObject
    >;
    ShoePurchased: TypedContractEvent<
      ShoePurchasedEvent.InputTuple,
      ShoePurchasedEvent.OutputTuple,
      ShoePurchasedEvent.OutputObject
    >;

    "ShoeRegistered(uint256,uint256,uint256,address)": TypedContractEvent<
      ShoeRegisteredEvent.InputTuple,
      ShoeRegisteredEvent.OutputTuple,
      ShoeRegisteredEvent.OutputObject
    >;
    ShoeRegistered: TypedContractEvent<
      ShoeRegisteredEvent.InputTuple,
      ShoeRegisteredEvent.OutputTuple,
      ShoeRegisteredEvent.OutputObject
    >;
  };
}
