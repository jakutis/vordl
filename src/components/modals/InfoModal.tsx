import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Cell } from '../grid/Cell'
import { XCircleIcon } from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="absolute right-4 top-4">
                <XCircleIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => handleClose()}
                />
              </div>
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Kaip žaisti?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Atspėk žodį per 6 bandymus. Po kiekvieno spėjimo, plytelės
                      spalvos keisis ir parodys kiek artimas buvo tavo spėjimas.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="R" status="correct" />
                      <Cell value="A" />
                      <Cell value="T" />
                      <Cell value="A" />
                      <Cell value="S" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Raidė R yra žodyje ir yra teisingoje vietoje.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="E" />
                      <Cell value="R" />
                      <Cell value="D" status="present" />
                      <Cell value="V" />
                      <Cell value="Ė" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Raidė D yra žodyje, bet yra neteisingoje vietoje.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="Š" />
                      <Cell value="O" />
                      <Cell value="K" />
                      <Cell value="I" status="absent" />
                      <Cell value="S" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Raidės I nėra žodyje jokioje vietoje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
