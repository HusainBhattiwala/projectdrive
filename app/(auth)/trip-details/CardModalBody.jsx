/* eslint-disable no-nested-ternary */
import { useContext, useState } from 'react';
import PaymentDetails from 'components/PaymentDetails';
import H2 from 'components/typography/H2';
import P from 'components/typography/P';
import Button from 'components/ui/Button';
import { UtilityContext } from 'context/UtilityContext';

export default function CardModalBody({
  selectedCard,
  selectedVehicle,
  userCurrency,
  onConfirm,
  allTripDetails,
  tariff,
  showNewCard,
  showNewRef,
  showSuccessMsg,
  setsetshowSuccessMsgMsg,
}) {
  const { formatPrice } = useContext(UtilityContext);
  const [showBilling, setShowBilling] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  function getRemainAmount() {
    const amount = ((Number(selectedVehicle?.tariff)) - Number(allTripDetails?.tariff)).toFixed(2);
    return {
      amount: Math.abs(amount),
      isGreter: amount > 0,
    };
  }

  async function callBooking() {
    setShowLoading(true);
    const success = await onConfirm();
    if (success) {
      setsetshowSuccessMsgMsg(true);
      setShowLoading(false);
    }
  }

  return (
    <div>
      {Number(tariff) !== Number(selectedVehicle?.tariff) ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {
          !showSuccessMsg
          && (
          <div>
            <H2 className="font-bold text-center text-[#59981A]">
              Tariff has been updated!
            </H2>
            <h3 className="!text-md text-center mt-3 mb-1 text-gray-700">
              Previous booking amount
              <b className="text-gray-600 uppercase">
                {' '}
                {' '}
                {' '}
                {formatPrice(allTripDetails.tariff, userCurrency || 'GBP')}
              </b>
            </h3>

          </div>
          )
        }

        </>
      ) : (
        <div>
          {
            !showSuccessMsg
            && (
            <H2 className="font-bold text-center text-black">
              Your ride details have been updated.
            </H2>
            )
          }

        </div>
      )}
      {Number(tariff) !== Number(selectedVehicle?.tariff) && (
        <>
          {
          !showSuccessMsg
          && (
            <h3 className="!text-md text-center mt-3 mb-1 text-gray-700">
              New booking amount
              <b className="text-primary uppercase">
                {' '}
                {' '}
                {' '}
                {formatPrice(selectedVehicle.tariff, userCurrency || 'GBP')}
              </b>
            </h3>
          )
        }

          {
          !showSuccessMsg
          && (
          <div className="mb-8">
            <h3 className="!text-md text-center mt-3 mb-4 text-gray-700">
              <b className="uppercase">
                {formatPrice(getRemainAmount().amount, userCurrency || 'GBP')}
              </b>
              {getRemainAmount().isGreter ? ' will be charged from your card. ' : ' will be refunded to you at the earliest. '}
            </h3>
          </div>
          )
        }
          {showNewCard && !showSuccessMsg && (
          <PaymentDetails
            showBilling={showBilling}
            setShowBilling={setShowBilling}
            callBooking={callBooking}
            showLoading={showLoading}
            setShowToken={() => {}}
            showToken
            showOption={false}
            showTwoLine
          />
          )}
        </>
      )}
      {showSuccessMsg && (
        <>
          <P className="my-2 !text-lg font-bold text-center text-success">
            Your booking has successfully been updated.
          </P>
          <p className="my-2 !text-md font-semibold text-center text-primary">
            Your booking reference number is
            <span className=" text-gray-800">
              {' '}
              { }
              #
              {showNewRef}

            </span>
          </p>
        </>
      )}
      {
        !showSuccessMsg && !showNewCard
          && (
          <div className="flex justify-center mt-8 mb-6">
            <Button
              disabled={showSuccessMsg}
              className="btn-primary"
              onClick={async () => {
                const success = await onConfirm(selectedCard, showNewCard, null);
                if (success) {
                  setsetshowSuccessMsgMsg(true);
                }
              }}
            >
              Confirm
            </Button>
          </div>
          )
      }
      {
          showSuccessMsg
          && (
          <div className="flex justify-center mt-8 mb-6">
            <a type="button" className="btn-primary py-3 px-2 rounded-md !text-white" href="/booking-management">Back to bookings</a>
          </div>
          )
        }
    </div>
  );
}
