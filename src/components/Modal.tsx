import { title } from "process";
import React from "react";
import { Control } from "react-hook-form";
import Input from "../components/Input";
import { InputProps } from "../types";

type Props = {
  showModal: any;
  setShowModal: (value: any) => void;
  control: Control<InputProps>;
  onSubmit: (value: any) => void;
  listIndex: number;
  title: string;
  body?: React.ReactNode;
  buttonProps?: {
    cancel?: string;
    confirm?: string;
  };
};

const Modal = ({
  showModal,
  setShowModal,
  onSubmit,
  listIndex,
  title,
  body,
  buttonProps,
}: Props) =>
  showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
            {/*body*/}
            {body}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  setShowModal((prevState: any) => {
                    prevState[listIndex] = false;
                    return [...prevState];
                  });
                }}
              >
                {buttonProps?.cancel || "Cancelar"}
              </button>
              <button
                className="bg-green-600 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onSubmit}
              >
                {buttonProps?.confirm || "Confirmar"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : (
    <></>
  );

export default Modal;
