require "test_helper"

class TitleTest < ActiveSupport::TestCase
  def setup
    @user = users(:one)
    @title = Title.new(title: "Sample Title", title_cased: "Sample Title", user: @user)
  end

  test "should be valid" do
    assert @title.valid?
  end

  test "title should be present" do
    @title.title = "   "
    assert_not @title.valid?
    assert_includes @title.errors[:title], "can't be blank"
  end

  test "title should not be too long" do
    @title.title = "a" * 256
    assert_not @title.valid?
    assert_includes @title.errors[:title], "is too long (maximum is 255 characters)"
  end

  test "title can be maximum length" do
    @title.title = "a" * 255
    assert @title.valid?
  end

  test "should belong to a user" do
    @title.user = nil
    assert_not @title.valid?
    assert_includes @title.errors[:user], "must exist"
  end

  test "associated user should be valid" do
    assert_equal @user, @title.user
  end

  test "should save when all validations pass" do
    assert @title.save
  end

  test "should not save when title is blank" do
    @title.title = ""
    assert_not @title.save
  end

  test "should not save when user is missing" do
    @title.user = nil
    assert_not @title.save
  end
end
