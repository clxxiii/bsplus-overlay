# Beat Saber Plus Overlay

Hey y'all

There was a pretty popular [beat saber web overlay](https://github.com/Reselim/beat-saber-overlay) that people were using for their twitch streams a few years ago, and it got archived. I failed to find any support for it in the current mod ecosystem, so I made my own version designed to last as long as the [BeatSaber Plus](https://github.com/hardcpp/BeatSaberPlus) mod continues to exist, which I imagine is going to be for an incredibly long time.

The look of the overlay is largely the same, much of the styles are ripped straight from that overlay anyway so yeaidk.

This code is incredibly over-engineered and stupid. Many of the styles are directly ripped from that version,
and I had to remove some elements that the new websocket didn't include, but it should be super easy to add should there ever be anything added to the websocket

## Parameters
There are some [parameters](https://www.botify.com/learn/basics/what-are-url-parameters) you can pass to the overlay url to alter its behavior.
If you don't know how to apply the parameters, check the article I linked, it should help if you aren't knowledgable.
Or if you'd rather, you can wait a few weeks for me to make a page where you can customize the overlay with a web interface.

|    Parameter    | Type                                       | Description |
| :-------------: | :----------------------------------------- | :---------- |
|  `leaderboard`  | `both \| scoresaber \| beatleader \| none` | `both` by default; Customizes which leaderboard is shown when not playing a map |
| `scoresaber_id` | `bigint`                                   | Specify a scoresaber user id to pull user data from. If left blank, it is pulled from the game automatically |
| `beatleader_id` | `bigint`                                   | Specify a beatleader user id to pull user data from. If left blank, it is pulled from the game automatically |
