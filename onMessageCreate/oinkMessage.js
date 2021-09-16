module.exports = {
    async heart(message) {

        if (message.content.toLowerCase() === "oink") {
            await message.react("🐷")
            await message.react("886004309429469254")


            //const emote = 
            const emote = message.reactions.cache.first(2)
            console.log(emote.forEach((e, i) =>
                console.log("hello", `@@this is i: ${i}@@`, e._emoji.name, e._emoji.id, e.count)
            ))
            console.log(emote)
            //console.log(emote[0])
        }


    },
}

/*
emote[0]
<ref *2> MessageReaction {
    message: <ref *1> Message {
        channelId: '662936355810050064',
        guildId: '504540136055242765',
        deleted: false,
        id: '888175064636325919',
        type: 'DEFAULT',
        system: false,
        content: 'oink',
        author: User {
            id: '90961398380625920',
            bot: false,
            system: false,
            flags: [UserFlags],
            username: 'oink',
            discriminator: '1721',
            avatar: '7ce4dc3d4b34c897b73f19b3d47c13ff'
        },
    pinned: false,
    tts: false,
    nonce: '888175056713154560',
    embeds: [],
    components: [],
    attachments: Collection(0) [Map] {},
    stickers: Collection(0) [Map] {},
    createdTimestamp: 1631827836904,
    editedTimestamp: null,
    reactions: ReactionManager { message: [Circular *1] },
    mentions: MessageMentions {
        everyone: false,
        users: Collection(0) [Map] {},
        roles: Collection(0) [Map] {},
        _members: null,
        _channels: null,
        crosspostedChannels: Collection(0) [Map] {},
        repliedUser: null
    },
    webhookId: null,
    groupActivityApplication: null,
    applicationId: null,
    activity: null,
    flags: MessageFlags { bitfield: 0 },
    reference: null,
    interaction: null
    },
    me: true,
    users: ReactionUserManager { reaction: [Circular *2] },
    _emoji: ReactionEmoji {
        animated: false,
        name: '🐷',
        id: null,
        deleted: false,
        reaction: [Circular *2]
    },
    count: 1
}
*/


/*
emote[1]
<ref *2> MessageReaction {
    message: <ref *1> Message {
        channelId: '662936355810050064',
        guildId: '504540136055242765',
        deleted: false,
        id: '888172099708014622',
        type: 'DEFAULT',
        system: false,
        content: 'oink',
        author: User {
            id: '90961398380625920',
            bot: false,
            system: false,
            flags: [UserFlags],
            username: 'oink',
            discriminator: '1721',
            avatar: '7ce4dc3d4b34c897b73f19b3d47c13ff'
        },
        pinned: false,
        tts: false,
        nonce: '888172091763851264',
        embeds: [],
        components: [],
        attachments: Collection(0) [Map] {},
        stickers: Collection(0) [Map] {},
        createdTimestamp: 1631827130010,
        editedTimestamp: null,
        reactions: ReactionManager { message: [Circular *1] },
        mentions: MessageMentions {
            everyone: false,
            users: Collection(0) [Map] {},
            roles: Collection(0) [Map] {},
            _members: null,
            _channels: null,
            crosspostedChannels: Collection(0) [Map] {},
            repliedUser: null
        },
        webhookId: null,
        groupActivityApplication: null,
        applicationId: null,
        activity: null,
        flags: MessageFlags { bitfield: 0 },
        reference: null,
        interaction: null
    },
    me: true,
    users: ReactionUserManager { reaction: [Circular *2] },
    _emoji: ReactionEmoji {
        animated: false,
        name: 'attackedpanda',
        id: '886004309429469254',
        deleted: false,
        reaction: [Circular *2]
    },
    count: 1
}
*/
