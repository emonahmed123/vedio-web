import { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";

import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../Redux/features/videos/videosSlice";
export default function VideGrid() {

    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector((state: any) => state.videos);

    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <div className="col-span-12">Loading...</div>
    } else if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    } else if (!isLoading && !isError && videos.length === 0) {
        content = <div className="col-span-12">No videos found!</div>
    } else {
        content = videos.map((video: any) => (
            <VideoGridItem key={video.id} video={video} />
        ))
    }


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
}
