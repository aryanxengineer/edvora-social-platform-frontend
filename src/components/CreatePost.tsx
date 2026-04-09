import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { newPostSchema, type NewPostDataType } from "@/schemas/post";

// ================= Helpers =================
const parseCommaSeparated = (value: string): string[] => {
  if (!value) return [];
  return value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
};

// ================= Component =================
export default function CreatePostForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading },
  } = useForm<NewPostDataType>({
    resolver: zodResolver(newPostSchema),
    defaultValues: {
      imageUrl: "",
      title: "",
      caption: "",
      location: "",
      tags: [],
      mentions: [],
      visibility: "public",
    },
  });

  const onSubmit = async (data: NewPostDataType) => {
    try {
      console.log("Final Payload:", data);

      // TODO: Replace with actual API call
      // await axios.post('/api/posts', data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Image URL */}
          <div>
            <Input placeholder="Image URL" {...register("imageUrl")} />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
            )}
          </div>

          {/* Title */}
          <div>
            <Input placeholder="Title" {...register("title")} />
          </div>

          {/* Caption */}
          <div>
            <Textarea
              placeholder="Write a caption..."
              {...register("caption")}
            />
          </div>

          {/* Location */}
          <div>
            <Input placeholder="Location" {...register("location")} />
          </div>

          {/* Tags */}
          <Controller
            control={control}
            name="tags"
            render={({ field }) => (
              <Input
                placeholder="Tags (comma separated)"
                onChange={(e) =>
                  field.onChange(parseCommaSeparated(e.target.value))
                }
              />
            )}
          />

          {/* Mentions */}
          <Controller
            control={control}
            name="mentions"
            render={({ field }) => (
              <Input
                placeholder="Mentions (comma separated)"
                onChange={(e) =>
                  field.onChange(parseCommaSeparated(e.target.value))
                }
              />
            )}
          />

          {/* Visibility */}
          <div>
            <select
              className="w-full border rounded-md p-2"
              {...register("visibility")}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="followers">Followers</option>
            </select>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Posting..." : "Create Post"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
