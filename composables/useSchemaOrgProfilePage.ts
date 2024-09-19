import type { ProfilePage } from 'schema-dts'

export const useSchemaOrgProfilePage = () => {
  const personSchema: ProfilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2024-12-23T12:34:00-05:00",
    "dateModified": "2024-12-26T14:53:00-05:00",
    "mainEntity": {
      "@type": "Person",
      "name": "Angelo Huff",
      "alternateName": "ahuff23",
      "identifier": "123475623",
      "interactionStatistic": [{
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/FollowAction",
        "userInteractionCount": 1
      },{
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": 5
      }],
      "agentInteractionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WriteAction",
        "userInteractionCount": 2346
      },
      "description": "Defender of Truth",
      "image": "https://example.com/avatars/ahuff23.jpg",
      "sameAs": [
        "https://www.example.com/real-angelo",
        "https://example.com/profile/therealangelohuff"
      ]
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: personSchema,
      },
    ],
  })
}
