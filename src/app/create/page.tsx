import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createPost } from "@/features/posts/postActions";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ImagePlus } from "lucide-react";

export default function Page() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.post);

  const [form, setForm] = useState({
    title: "",
    caption: "",
    visibility: "public",
    hashtags: "",
    mentions: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", form.title);
    formData.append("caption", form.caption);
    formData.append("visibility", form.visibility);

    form.hashtags.split(",").forEach((tag) => {
      if (tag.trim()) formData.append("hashtags", tag.trim());
    });

    form.mentions.split(",").forEach((mention) => {
      if (mention.trim()) formData.append("mentions", mention.trim());
    });

    try {
      await dispatch(createPost(formData)).unwrap();
      toast.success("Post created successfully");
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* HEADER */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-muted transition"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-lg font-semibold">Create Post</h1>
        </div>

        {/* FORM CARD */}
        <Card>
          <CardHeader className="text-sm font-medium">
            Upload your content
          </CardHeader>

          <CardContent className="space-y-5">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* IMAGE UPLOAD */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Image</label>

                <div className="border rounded-lg p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-muted/50 transition relative">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />

                  {preview ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full h-60 object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <ImagePlus className="w-6 h-6 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">
                        Click to upload image
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* TITLE */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  name="title"
                  placeholder="Give your post a title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              {/* CAPTION */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Caption</label>
                <Textarea
                  name="caption"
                  placeholder="Write something..."
                  value={form.caption}
                  onChange={handleChange}
                />
              </div>

              {/* HASHTAGS + MENTIONS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hashtags</label>
                  <Input
                    name="hashtags"
                    placeholder="#react, #node"
                    value={form.hashtags}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mentions</label>
                  <Input
                    name="mentions"
                    placeholder="@user1, @user2"
                    value={form.mentions}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* VISIBILITY */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Visibility</label>
                <select
                  name="visibility"
                  value={form.visibility}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 bg-background"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              {/* SUBMIT */}
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full"
              >
                {isLoading ? <Spinner /> : "Post"}
              </Button>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}