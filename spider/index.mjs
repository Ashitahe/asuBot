/*
 * @Descripttion:
 * @version:
 * @Author: Asuhe
 * @Date: 2023-01-07 10:57:09
 * @LastEditors: Asuhe
 * @LastEditTime: 2023-01-07 10:57:18
 */
import axios from "../plugin/lib/http.mjs";
import request from "../plugin/lib/http.mjs";
const url = `https://api.twitter.com/graphql/auqzzVGn2nPLZGNn9pngTw/UserMedia?variables={"userId":"731525153985822720","count":5,"includePromotedContent":false,"withSuperFollowsUserFields":true,"withDownvotePerspective":false,"withReactionsMetadata":false,"withReactionsPerspective":false,"withSuperFollowsTweetFields":true,"withClientEventToken":false,"withBirdwatchNotes":false,"withVoice":true,"withV2Timeline":true}&features={"responsive_web_twitter_blue_verified_badge_is_enabled":true,"verified_phone_label_enabled":false,"responsive_web_graphql_timeline_navigation_enabled":true,"view_counts_public_visibility_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":false,"tweetypie_unmention_optimization_enabled":true,"responsive_web_uc_gql_enabled":true,"vibe_api_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":false,"interactive_text_enabled":true,"responsive_web_text_conversations_enabled":false,"responsive_web_enhance_cards_enabled":false}`;
const headers = {
  authorization:
    "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
  cookie: `personalization_id="v1_Dcd5YEgcu7SsKrZcJeGWPA=="; guest_id=v1%3A166583516326837626; kdt=DH8uzGuakcq801310WzjiromZ7RqpeFQCF6HSh2i; auth_token=8ec7d62e3c18dea91498bf33c0c4863971210140; ct0=2b8b8d6f2b64924df792bff0423ed692ec91c1670490483d5093270dd60eed320a33cac0b1a0440b5ceee3a5730a916f3ab4e27d22bc2e7bae11ea6f197494417c83d60033fe24410740a0d9f825fd7f; twid=u%3D1384849909992493060; guest_id_marketing=v1%3A166583516326837626; guest_id_ads=v1%3A166583516326837626; at_check=true`,
  ["x-csrf-token"]: `2b8b8d6f2b64924df792bff0423ed692ec91c1670490483d5093270dd60eed320a33cac0b1a0440b5ceee3a5730a916f3ab4e27d22bc2e7bae11ea6f197494417c83d60033fe24410740a0d9f825fd7f`,
};

// request
//   .get(url, { headers })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

axios
  .get(url, { headers })
  .then((res) => console.log(res))
  .catch((err) => console.log("err!!!!", err));
