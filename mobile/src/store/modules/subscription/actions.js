export function createSubscriptionRequest(meetupId) {
  return {
    type: '@subscription/CREATE_SUBSCRIPTION_REQUEST',
    payload: { meetupId },
  };
}

export function createSubscriptionSuccess() {
  return {
    type: '@subscription/CREATE_SUBSCRIPTION_SUCCESS',
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function cancelSubscriptionSuccess(id) {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION_SUCCESS',
    payload: { id },
  };
}



export function subscriptionFailure() {
  return {
    type: '@subscription/SUBSCRIPTION_FAILURE',
  };
}
export function getSubscriptionsRequest(date) {
  return {
    type: '@subscription/GET_SUBSCRIPTIONS_REQUEST',
    payload: { date },
  };
}

export function getSubscriptionsSuccess(data) {
  return {
    type: '@subscription/GET_SUBSCRIPTIONS_SUCCESS',
    payload: { data },
  };
}
